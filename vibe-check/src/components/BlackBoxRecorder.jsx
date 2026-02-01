import React, { useState, useRef, useEffect } from 'react';

const BlackBoxRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" }
      });
      

      const options = { mimeType: 'video/webm;codecs=vp8' };
      

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.warn("VP8 not supported, falling back to default webm");
        mediaRecorderRef.current = new MediaRecorder(stream);
      } else {
        mediaRecorderRef.current = new MediaRecorder(stream, options);
      }
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      console.log("⏺️ Black Box Recording Started...");
    } catch (err) {
      console.error("Error starting screen record:", err);
    }
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      setClickCount(prev => prev + 1);
      setTimeout(() => setClickCount(0), 1000);
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    if (clickCount >= 4 && isRecording) {
      console.log("🚨 RAGE CLICK DETECTED! Stopping & Uploading...");
      stopAndUpload();
      setClickCount(0);
    }
  }, [clickCount, isRecording]);

  const stopAndUpload = () => {
    if (!mediaRecorderRef.current) return;


    setTimeout(() => {
        mediaRecorderRef.current.stop();
    }, 500);
    
    mediaRecorderRef.current.onstop = async () => {

      if (chunksRef.current.length === 0) {
          console.error("No video chunks recorded!");
          return;
      }
      
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      console.log(`Video Size: ${blob.size} bytes`); // Debug log

      const formData = new FormData();
      formData.append('video', blob, 'incident.webm');
      
      alert("🚨 Uploading Session Replay to Ouroboros...");

      try {
        const response = await fetch('http://localhost:5000/report-incident', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.status === "success") {
          alert("✅ FIX DEPLOYED! Refreshing page...");
          window.location.reload();
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
      // Clear chunks for next time
      chunksRef.current = [];
    };
  };

  if (isRecording) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button 
        onClick={startRecording}
        className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 font-bold text-sm flex items-center gap-2"
      >
        ⏺️ Start Beta Session
      </button>
    </div>
  );
};

export default BlackBoxRecorder;
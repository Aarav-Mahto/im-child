export async function handleFileUpload(productId, uploadedFile, directory) {
    if (!uploadedFile) {
      alert('Please select a file before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadedFile); // Add file
    formData.append('directory', directory); // Add directory if required
    formData.append('productId', productId); // Add productId if required
    console.log("directory:", directory);

    try {
      const response = await fetch(`http://localhost:9000/upload/${productId}?folderName=${directory}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
      } else {
        alert('Failed to upload file.');
        console.error('Error:', await response.text());
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred during file upload.');
    }
  };

export async function uploadMultipleFiles(productId, files, directory) {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file)); // Append multiple files
  
    try {
      const response = await fetch(`http://localhost:9000/upload-multiple/${productId}?folderName=${directory}`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log('Files uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading files:', error.message);
    }
  }
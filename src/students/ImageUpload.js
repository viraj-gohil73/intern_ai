import { useState } from 'react';

export default function ImageUpload({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <label htmlFor="file-input" className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100 hover:border-gray-600 transition">
        {image ? (
          <img src={image} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-2xl font-bold">+</span>
        )}
        <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
      </label>
    </div>
  );
}

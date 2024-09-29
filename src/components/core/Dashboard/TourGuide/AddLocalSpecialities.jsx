import '../../../../styles/AddLocalSpecialities.css'
import { useState } from 'react';

export const AddLocalSpecialities = () => {
  const [formData, setFormData] = useState([
    { itemType: '', imageType: 'file', image: '', location: '', category: '', name: '', description: '' }
  ]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleInputChange = (index, event) => {
    const values = [...formData];
    const { name, value, files } = event.target;

    if (name === 'image' && formData[index].imageType === 'file') {
      values[index][name] = files[0];
    } else {
      values[index][name] = value;
    }

    setFormData(values);
  };

  const handleImageTypeChange = (index, event) => {
    const values = [...formData];
    values[index]['imageType'] = event.target.value;
    values[index]['image'] = ''; // Clear image value when changing the type
    setFormData(values);
  };

  const handleAddForm = () => {
    setFormData([...formData, { itemType: '', imageType: 'file', image: '', location: '', category: '', name: '', description: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading animation

    // Simulate a network request
    setTimeout(() => {
      console.log('Form Data:', formData);
      setFormData([
        { itemType: '', imageType: 'file', image: '', location: '', category: '', name: '', description: '' }
      ]); // Clear the form fields
      setIsLoading(false); // Hide loading animation
    }, 2000); // 2-second timeout to simulate submission
  };

  return (
    <div className="form-container">
      {isLoading && <div className="loading-overlay"><div className="loader"></div></div>}
      
      <h2>Add Information</h2>
      <form onSubmit={handleSubmit}>
        {formData.map((form, index) => (
          <div key={index} className="form-section">
            {/* Item Type Dropdown */}
            <div>
              <label>Item Type: </label>
              <select
                name="itemType"
                value={form.itemType}
                onChange={(event) => handleInputChange(index, event)}
                required
              >
                <option value="" disabled>Select Item Type</option>
                <option value="events">Add Events</option>
                <option value="famousPlace">Add Famous Place</option>
                <option value="food">Add Food</option>
                <option value="handicrafts">Add Handicrafts</option>
              </select>
            </div>

            {/* Image Type Toggle */}
            <div>
              <label>Image Type: </label>
              <select
                name="imageType"
                value={form.imageType}
                onChange={(event) => handleImageTypeChange(index, event)}
                required
              >
                <option value="file">File</option>
                <option value="url">URL</option>
              </select>
            </div>

            {/* Conditionally render either file input or URL input */}
            {form.imageType === 'file' ? (
              <div>
                <label>Image: </label>
                <input
                  type="file"
                  name="image"
                  onChange={(event) => handleInputChange(index, event)}
                  required
                />
              </div>
            ) : (
              <div>
                <label>Image URL: </label>
                <input
                  type="url"
                  name="image"
                  value={form.image}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="Enter image URL"
                  required
                />
              </div>
            )}

            <div>
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>

            <div>
              <label>Category: </label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>

            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>

            <div>
              <label>Description: </label>
              <textarea
                name="description"
                value={form.description}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>
          </div>
        ))}

        <button type="button" className="add-more-btn" onClick={handleAddForm}>+ Add More Information</button>
        <button type="submit" className="submit-btn" disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
}

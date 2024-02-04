import cv2

def detect_height_optimized(image_path):
    # Load the image
    image = cv2.imread(image_path)
    print(image.shape)
    # Resize the image to reduce processing time, maintain aspect ratio
    scale_percent = 100  # percent of original size
    width = int(image.shape[1] * scale_percent / 100)
    height = int(image.shape[0] * scale_percent / 100)
    dim = (width, height)
    resized = cv2.resize(image, dim, interpolation = cv2.INTER_AREA)
    
    # Convert to grayscale
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)
    
    # Edge detection
    edged = cv2.Canny(gray, 50, 150)
    
    # # Find contours
    # contours, _ = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # # Assuming the largest contour is the major object
    # if contours:
    #     largest_contour = max(contours, key=cv2.contourArea)
    #     _, _, _, h = cv2.boundingRect(largest_contour)
    #     object_height = h  # Height of the object in resized pixels
        
    #     # Calculate the height in original pixels
    #     original_height = object_height * 100 / scale_percent
        
    #     return original_height
    # else:
    #     return None
    
    _, _, _, object_height = cv2.boundingRect(edged)
    original_height = object_height * 100 / scale_percent
    return original_height

# Example usage
image_path = "wheat.jpg"
height = detect_height_optimized(image_path)
print(f"Object Height: {height} pixels")
print("DONE")
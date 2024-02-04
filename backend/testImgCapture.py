import subprocess

def capture_image(device="USB Camera", output_file="picture.jpg"):
    command = ["imagesnap"]
    if device:
        command += ["-d", device]
    command += [output_file]
    try:
        subprocess.run(command, check=True)
        print(f"Image captured and saved as {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while capturing the image: {e}")
    except FileNotFoundError as e:
        print(f"imagesnap not found, please install it with 'brew install imagesnap': {e}")

# Example usage
capture_image()

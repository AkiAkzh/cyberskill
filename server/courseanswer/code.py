def caesar_cipher_encrypt(text, shift):
        encrypted_text = ""
        for char in text:
            if char.isalpha():
                shift_base = 65 if char.isupper() else 97
                encrypted_text += chr((ord(char) - shift_base + shift) % 26 + shift_base)
            else:
                encrypted_text += char
        return encrypted_text
message = "cyberskills"
shift = 2
encrypted_message = caesar_cipher_encrypt(message, shift)
print(f"encrypted message: {encrypted_message}")
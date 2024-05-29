 public class CaesarCipher {
    public static String caesarCipher(String text, int shift) {
        StringBuilder result = new StringBuilder();
        for (char character : text.toCharArray()) {
            if (Character.isLetter(character)) {
                int shiftBase = Character.isUpperCase(character) ? 'A' : 'a';
                result.append((char) ((character - shiftBase + shift) % 26 + shiftBase));
            } else {
                result.append(character);
            }
        }
        return result.toString();
    }

    public static String caesarDecipher(String text, int shift) {
        return caesarCipher(text, -shift);
    }

    public static void main(String[] args) {
        String text = "Hello, World!";
        int shift = 3;
        String encryptedText = caesarCipher(text, shift);
        String decryptedText = caesarDecipher(encryptedText, shift);
        System.out.println("Original text: " + text);
        System.out.println("Encrypted text: " + encryptedText);
        System.out.println("Decrypted text: " + decryptedText);
    }
}

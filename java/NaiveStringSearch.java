public class NaiveStringSearch {
    public static void main(final String[] args) {
        String str = "bork";
        String search = "i like to bork and bark but bork with fork is nice as bark as bork";
        stringSearch(search, str);
    }

    public static void stringSearch(final String str, final String pattern) {
        int matches = 0;
        String[] strArr = str.split("(?!^)");
        String[] patternArr = pattern.split("(?!^)");
        for (int i = 0; i < strArr.length; i++) {
            boolean isMatch = false;
            if (strArr[i].equals(patternArr[0])) {
                for (int j = 0; j < patternArr.length; j++) {
                    if (strArr[i + j].equals(patternArr[j])) {
                        isMatch = true;
                    } else {
                        isMatch = false;
                        break;
                    }
                }
            }
            if (isMatch) {
                matches++;
            }
        }
        System.out.println(matches);
    }
}

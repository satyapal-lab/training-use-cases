
public class FactorialExample {

    public static void main(String args[]) {
        Math math = new Math();

        System.out.println("Please enter the number to calculate factorial");
        String text = System.console().readLine();
        
        int num = Integer.parseInt(text);

        System.out.println(" Please enter 1 for recur and 2 for iteration");

        String algo = System.console().readLine();

        switch (algo) {
            case "1":
                System.out.println("Recur: Factorial of " + num + " is : " + math.factorialRec(num));
               break;
            case "2":
                System.out.println("Iteration: Factorial of " + num + " is : " + math.factorial(num));
               break;
            default:
                System.out.println("Default: Factorial of " + num + " is : " + math.factorial(num));
                break;
        }

    }

}

class Math {
    public int factorial(int num) {
        int fact = 1;

        if (num < 0) {
            return num;
        }

        for (int i = 1; i <= num; i++) {
            fact = fact * i;
        }

        return fact;
    }

    public int factorialRec(int num) {
        if (num == 0 || num == 1) {
            return 1;
        }

        return num * factorialRec(num - 1);
    }
}
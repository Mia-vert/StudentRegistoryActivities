//implement
import java.util.Scanner;   
public class implement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String studentName = scanner.nextLine();
        System.out.print("Enter the number of registered courses: ");
        int numberOfRegisteredCourses = scanner.nextInt();
        
        if (numberOfRegisteredCourses < 7) {
            System.out.println("Overload approval required.");
        } else {
            System.out.println("Registration accepted.");
        }
        
        scanner.close();
    }
}
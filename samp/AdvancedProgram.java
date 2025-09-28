import java.util.*;

public class AdvancedProgram {

    static class Student {
        String name;
        int marks;

        Student(String name, int marks) {
            this.name = name;
            this.marks = marks;
        }

        public String toString() {
            return name + " - " + marks;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Student> students = new ArrayList<>();

        System.out.print("How many students? ");
        int count = scanner.nextInt();
        scanner.nextLine(); // consume newline

        for (int i = 0; i < count; i++) {
            System.out.print("Enter name: ");
            String name = scanner.nextLine();

            System.out.print("Enter marks: ");
            int marks = scanner.nextInt();
            scanner.nextLine(); // consume newline

            students.add(new Student(name, marks));
        }

        // Sort by marks (descending)
        students.sort((a, b) -> b.marks - a.marks);

        System.out.println("\nSorted Students by Marks:");
        for (Student s : students) {
            System.out.println(s);
        }
    }
}

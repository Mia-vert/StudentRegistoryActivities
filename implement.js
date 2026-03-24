// implement 
#include <stdio.h>

int main() {
    char student_name[50];
    int number_of_registered_courses;   
    printf("Enter your name: ");
    fgets(student_name, sizeof(student_name), stdin);
    student_name[strcspn(student_name, "\n")] = 0; // Remove newline character  
    printf("Student Name: %s\n", student_name);
    printf("Enter the number of registered courses: ");
    scanf("%d", &number_of_registered_courses); 
    printf("Student: %s\nNumber of courses: %d\nStatus: ", student_name, number_of_registered_courses);
    if (number_of_registered_courses > 7) {
        printf("Overload approval required.\n");
    } else {
        printf("Registration accepted.\n");
    }
    return 0;
}   
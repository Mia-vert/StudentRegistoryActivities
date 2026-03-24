// implement 
#include <stdio.h>
int main() {
    char student_name[50];
    int number_of_registered_courses;

    printf("Enter your name: ");
    fgets(student_name, sizeof(student_name), stdin);

    printf("Enter the number of registered courses: ");
    scanf("%d", &number_of_registered_courses);

    if (number_of_registered_courses > 7) {
        printf("Overload approval required.\n");
    } else {
        printf("Registration accepted.\n");
    }

    return 0;
}
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number; 
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0).toUpperCase();
  const fullname = `${initial}. ${lastName}`;
  return fullname;
};

interface Student {
    firstName: string,
    lastName: string,
}

interface studentClass {
    new (firstName: string, lastName: string): {
        workOnHomework(): string;
        displayName(): string;
    };
}

const StudentClass: studentClass = class {
    constructor(private firstName: string, private lastName: string){}

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName
    }
}
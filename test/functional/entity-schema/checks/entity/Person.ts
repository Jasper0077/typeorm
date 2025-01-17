import { EntitySchema } from "../../../../../src/index"

export const PersonSchema = new EntitySchema<any>({
    name: "Person",
    columns: {
        Id: {
            primary: true,
            type: "int",
            generated: "increment",
        },
        FirstName: {
            type: String,
            length: 30,
        },
        LastName: {
            type: String,
            length: 50,
            nullable: false,
        },
        Age: {
            type: Number,
            nullable: false,
        },
    },
    checks: [
        { expression: `"FirstName" <> 'John' AND "LastName" <> 'Doe'` },
        { expression: `"Age" > 18` },
    ],
})

Create forms following this pattern

- Set default values following the schema.
- Derive TypeScript types from the Zod schema.
- Import form components from @/components/form:
FormInput, FormTextarea, FormSelect, FormCheckbox, FormBase, etc(creating new if you needed).
- Pass control={form.control} to every form component.
- Include label, name, and placeholder props as needed.
- Use leftIcon and rightIcon (from lucide-react) for FormInput.
- Handle success/error states and reset on success with form.reset().
-Show loading state via isPending from the mutation.
- Wrap fields in a <form> using onSubmit={form.handleSubmit(onSubmit)} and noValidate.
- Use Tailwind for spacing and layout.
- Validation errors show automatically.
-Handle API errors with toast notifications.
- Validation runs on submit via zodResolver.
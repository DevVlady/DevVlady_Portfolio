import React from 'react';
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from './ContactElements';

const Contact = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="">
                            <FormH1>Contact Me</FormH1>
                            <FormLabel htmlFor='for'>First & Last Name</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInput type='message' required />
                            <FormButton type='submit'>Submit</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Contact

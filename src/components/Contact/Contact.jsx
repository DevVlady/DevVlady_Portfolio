import React from 'react'

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
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Contact

import React from "react";
import Link from "next/link";
import * as yup from "yup";
import HEAD_TITLES from "../layout/headPage";
import HeadPage from "../layout/headPage";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import { Button, Form, Spinner } from "react-bootstrap";
import styles from "../loginPage/styles.module.css";
import InputField from "../fields/inputField";
import { loginService } from "@/services/authServices";
const defaultValues = {
  email: "",
  password: "",
};

function SignupPage() {
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    const res = await loginService({
      password: values.password,
      email: values.email,
      confirmPassword: values.confirmPassword,
    });

    if (res.success) {
      // window.location = "/users";
      router.replace("/users");
    } else {
      alert(res.message);
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    // confirmPassword: yup
    //   .string()
    //   .required("confirm Password")
    //   .oneOf([yup.ref("password"), null], "please confirm password"),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <>
      <HeadPage title={HEAD_TITLES.login}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                {/* <Alert key="danger" variant="danger">
                    This is a alert—check it out!
                  </Alert> */}
                <Formik
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                  initialValues={defaultValues}
                >
                  {({ handleSubmit, isSubmitting }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit}>
                        <div
                          className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                        >
                          <div className="row my-2">
                            <div className="col-12">
                              <h2
                                className={`${styles.contactFormHeading} text-center`}
                              >
                                SingUp Page
                              </h2>
                              <p
                                className={`${styles.contactFormParagh} text-center text-dark`}
                              >
                                faucibus ultrices facilisis odio amet, luctus
                                vehicula, turpis elit. Sed placerat.
                              </p>
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                name="email"
                                placeholder="Email Address"
                                label="Email"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                component={InputField}
                              />
                            </div>

                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="confirmPassword"
                                label=" confirmPassword"
                                placeholder="Confirm your password"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckBox"
                              >
                                <Form.Check
                                  type="checkBox"
                                  name="term"
                                  label="I accept the terms and conditions"
                                />
                              </Form.Group>
                            </div>

                            <div className="col-12 mx-auto my-2 mt-4">
                              <Button
                                disabled={isSubmitting}
                                type="submit"
                                // variant={isSubmitting ? "secondary" : "primary"}
                                className={`btn w-100 ${
                                  isSubmitting ? "bg-secondary" : "bg-primary"
                                } bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}
                              >
                                {/* {isSubmitting ? "Submitting..." : "Login >>"} */}
                                {isSubmitting ? (
                                  <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </Spinner>
                                ) : (
                                  "SignUp"
                                )}
                              </Button>
                            </div>

                            <div className="col-12 mt-4 d-flex justify-content-between">
                              <a href="/">
                                <i className="fa fa-arrow-left"></i> Back
                              </a>
                              <a href="./login">
                                {" "}
                                Login <i className="fa fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>
    </>
  );
}
export default SignupPage;

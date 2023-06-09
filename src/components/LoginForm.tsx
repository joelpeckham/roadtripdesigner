import React, { useState, useRef, MutableRefObject} from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authErrorToMessage } from "../../authErrorToMessage";

interface LoginFormProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null | undefined) => void;
}

export const LoginForm = ({ closeModal }:LoginFormProps) => {
  const [formData, setFormData] = useState({});
  const toast : MutableRefObject<any> = useRef(null);
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });
  type DataShape = {
    email: string;
    password: string;
  };
  const onSubmit = async (data:DataShape) => {
    setFormData(data);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        try {
          closeModal(null);
        } catch (e) {}
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: authErrorToMessage(errorCode),
          life: 4000,
        });
        reset();
      });
  };

  const getFormErrorMessage = (name:string) => {
    return (
      errors[name as keyof typeof errors] && <small className="p-error">{errors[name as keyof typeof errors]!.message}</small>
    );
  };

  return (
    <div className="form-demo">
      <Toast ref={toast} />
      <div className="flex justify-content-center">
        <div className="card">
          {/* <h5 className="text-center">Register</h5> */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address. E.g. example@email.com",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      autoFocus
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="email"
                  className={classNames({ "p-error": !!errors.email })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required." }}
                  render={({ field, fieldState }) => (
                    <Password
                      feedback={false}
                      id={field.name}
                      {...field}
                      toggleMask
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="password"
                  className={classNames({ "p-error": errors.password })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>
            <div className="formgrid grid">
              <div className="field col m-0">
                <Button
                  type="button"
                  label="Cancel"
                  className="mt-2 p-button-text p-button-danger"
                  onClick={(e) => closeModal(e)}
                />
              </div>
              <div className="field col m-0">
                <Button type="submit" label="Login" className="mt-2" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

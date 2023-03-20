import React, { useState, useRef, MutableRefObject } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../../firebase";
import { Toast } from "primereact/toast";
import { authErrorToMessage } from "../../authErrorToMessage";

interface RegisterFormProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null | undefined) => void;
}

export const RegisterForm = ({ closeModal: closeModal } : RegisterFormProps) => {
  const [formData, setFormData] = useState({});
  const toast : MutableRefObject<any> = useRef(null);
  const defaultValues = {
    name: "",
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
    name: string;
    email: string;
    password: string;
  };
  const onSubmit = (data : DataShape) => {
    setFormData(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        console.log(data.name)
        updateProfile(auth.currentUser!, {
          displayName: data.name,
        })
        
        try {
          closeModal(null);
        } catch (e) {}
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: authErrorToMessage(errorCode),
          life: 4000,
        });
      });
    reset();
  };

  const getFormErrorMessage = (name:string) => {
    return (
      errors[name as keyof typeof errors] && <small className="p-error">{errors[name as keyof typeof errors]!.message}</small>
    );
  };
  const passwordHeader = <h5>Password strength</h5>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="form-demo">
      <Toast ref={toast} />
      <div className="flex justify-content-center">
        <div className="card">
          {/* <h5 className="text-center">Register</h5> */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      autoFocus
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="name"
                  className={classNames({ "p-error": errors.name })}
                >
                  Name*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>
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
                      id={field.name}
                      {...field}
                      toggleMask
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                      header={passwordHeader}
                      footer={passwordFooter}
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
                <Button type="submit" label="Register" className="mt-2" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

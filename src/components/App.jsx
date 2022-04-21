import { useForm } from "react-hook-form";
export const App = () => {
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const myOnSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  console.log(isValid)
  return <div style={{padding: "40px", width: "500px", justifyContent: "center", marginLeft: "auto", marginRight: "auto"}}>
    <h1>React Hook Forms</h1>
    <form onSubmit={handleSubmit(myOnSubmit)}>
      <label>
        First Name:
        <input {...register('firstName', {
          required: "Поле обязательно к заполнению!",
          minLength: {
            value: 5,
            message: 'Минимум 5 символов'
          }
        })}/>
      </label>
      <div style={{ height: 40 }}>
        {errors?.firstName && <p>{errors?.firstName?.message || "Error!" }</p>}
      </div>
      <label>
        Last Name:
        <input {...register('lastName', {
          required: "Поле обязательно к заполнению!",
          minLength: {
            value: 5,
            message: 'Минимум 5 символов'
          }
        })}/>
      </label>
      <div style={{ height: 40 }}>
        {errors?.lastName && <p>{errors?.lastName?.message || "Error!" }</p>}
      </div>
      <input type="submit" disabled={!isValid}/>
    </form>
  </div>;
};


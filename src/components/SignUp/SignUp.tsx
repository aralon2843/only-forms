import React from 'react';
import {
  FormWrapper,
  Input,
  SubmitButton,
  Offer,
  InputWrapper,
  InputError,
  Loader,
} from '../common/Form.styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpUser } from '../../store/signup/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

interface ISignUpInputs {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordRepeat: string;
}

interface ISignUpProps {
  onClick: () => void;
}

const SignUp: React.FC<ISignUpProps> = ({ onClick }): JSX.Element => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<ISignUpInputs>();

  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector<RootState>((state) => state.signup.error);
  const status = useSelector<RootState>((state) => state.signup.status);

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) => {
    dispatch(
      signUpUser({
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      })
    );
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          error={!!errors.email?.message}
          {...register('email', {
            required: 'Обязательное поле',
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Неверный формат почты',
            },
          })}
        />
        {errors.email?.message && (
          <InputError>{errors.email.message}</InputError>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type={'text'}
          placeholder={'Имя пользователя'}
          error={!!errors.username?.message}
          {...register('username', {
            required: 'Обязательное поле',
          })}
        />
        {errors.username?.message && (
          <InputError>{errors.username?.message}</InputError>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type={'text'}
          placeholder={'Имя'}
          error={!!errors.firstName?.message}
          {...register('firstName', {
            required: 'Обязательное поле',
            pattern: {
              value: /^[а-яА-я\-]+$/,
              message: 'Имя должно содержать только русские буквы',
            },
          })}
        />
        {errors.firstName?.message && (
          <InputError>{errors.firstName?.message}</InputError>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type={'text'}
          placeholder={'Фамилия'}
          error={!!errors.lastName?.message}
          {...register('lastName', {
            required: 'Обязательное поле',
            pattern: {
              value: /^[а-яА-я\-]+$/,
              message: 'Фамилия должна содержать только русские буквы',
            },
          })}
        />
        {errors.lastName?.message && (
          <InputError>{errors.lastName?.message}</InputError>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type={'password'}
          placeholder={'Пароль'}
          error={!!errors.password?.message}
          {...register('password', {
            required: 'Обязательное поле',
            minLength: {
              value: 6,
              message: 'Пароль должен быть длиннее 6 символов',
            },
          })}
        />
        {errors.password?.message && (
          <InputError>{errors.password?.message}</InputError>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type={'password'}
          placeholder={'Подтверждение пароля'}
          error={!!errors.passwordRepeat?.message}
          {...register('passwordRepeat', {
            required: 'Обязательное поле',
            validate: {
              emailEqual: (value) =>
                value === getValues().password || 'Пароли не совпадают',
            },
          })}
        />
        {errors.passwordRepeat?.message && (
          <InputError>{errors.passwordRepeat?.message}</InputError>
        )}
      </InputWrapper>
      {error && <InputError>{String(error)}</InputError>}
      <SubmitButton>
        {status === 'loading' ? <Loader>Loading</Loader> : 'Зарегистрироваться'}
      </SubmitButton>
      <Offer>
        Уже есть аккаунт? <span onClick={onClick}>Войти</span>
      </Offer>
    </FormWrapper>
  );
};

export default SignUp;

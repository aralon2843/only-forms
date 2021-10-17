import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  FormWrapper,
  Input,
  Label,
  SubmitButton,
  Offer,
  InputError,
  InputWrapper,
  Eye,
  PasswordWrapper,
  Loader,
} from '../common/Form.styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { loginUser } from '../../store/login/actions';
import checkmark from '../../assets/icons/checkmark.svg';
import eyeIcon from '../../assets/icons/eye.svg';

interface ILoginInputs {
  email: string;
  password: string;
  remember?: boolean;
}

interface ILoginProps {
  onClick: () => void;
}

const Login: React.FC<ILoginProps> = ({ onClick }): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const history = useHistory();

  const dispatch = useDispatch<AppDispatch>();

  const error = useSelector<RootState>((state) => state.login.error);
  const status = useSelector<RootState>((state) => state.login.status);

  const accessToken = localStorage.getItem('accessToken');

  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);

  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    dispatch(
      loginUser({
        username: data.email,
        password: data.password,
      })
    );
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (accessToken) {
      history.push('/profile');
    }
  }, [accessToken]);

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
      <PasswordWrapper>
        <InputWrapper>
          <Input
            type={passwordShown ? 'text' : 'password'}
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
          <Eye icon={eyeIcon} onClick={togglePasswordVisiblity} />
          <InputError>{errors.password?.message}</InputError>
        </InputWrapper>
      </PasswordWrapper>

      <Checkbox
        icon={checkmark}
        type={'checkbox'}
        checked={checked}
        {...register('remember')}
      />
      <Label onClick={onCheckboxClick}>Запомнить меня</Label>
      {error && <InputError>{String(error)}</InputError>}
      <SubmitButton>
        {status === 'loading' ? <Loader>Loading</Loader> : 'Войти'}
      </SubmitButton>
      <Offer>
        Еще не зарегистрированы? <span onClick={onClick}>Получить аккаунт</span>
      </Offer>
    </FormWrapper>
  );
};

export default Login;

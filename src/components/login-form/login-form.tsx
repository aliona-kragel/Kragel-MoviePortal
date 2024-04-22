import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LoginDataTypes } from "../../types/types";
import useCommonActions from "../../hooks/use-common-actions";
import { ACCESS_TOKEN, ACCESS_TOKEN_RANDOM_VALUE, Paths, USER_DATA } from "../../constants";
import { ErrorModal } from "../error-modal";

import styles from "./styles.module.scss";

export const LoginForm: FC = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { setLoggedIn } = useCommonActions();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: LoginDataTypes) => {
    const { email, password } = values;
    const localStorageData = localStorage.getItem(USER_DATA);

    if (!!localStorageData) {
      const userData = JSON.parse(localStorageData)
      if (email === userData.email && password === userData.password) {
        localStorage.setItem(ACCESS_TOKEN, ACCESS_TOKEN_RANDOM_VALUE);
        setLoggedIn(true);
        navigate(Paths.MAIN);
      } else {
        setShowErrorModal(true)
      }
    } else {
      setShowErrorModal(true)
    }
  };

  return (
    <>
      <Form
        form={form}
        name="login-form"
        className={styles.form}
        onFinish={onFinish}
      >
        <div className={styles.fields}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Введите e-mail' },
              { pattern: /^\S+@\S+\.\S+$/, message: 'Некорректный формат e-mail' }
            ]}
          >
            <Input
              addonBefore={<div>e-mail:</div>}
              size="large"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Пароль не менее 8 символов,с заглавной буквой и цифрой' },
              { pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Пароль не менее 8 символов,с заглавной буквой и цифрой" }
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Пароль"
              size="large"
            />
          </Form.Item>
        </div>
        <Form.Item >
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
          >
            Войти
          </Button>
        </Form.Item>
      </Form >
      <ErrorModal open={showErrorModal} setOpen={setShowErrorModal} />
    </>
  )
}
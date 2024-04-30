import { FC, useState, } from "react";
import { Button, Form, Input } from "antd";
import useCommonActions from "../../hooks/use-common-actions";
import { SuccessModal } from "../success-modal";
import { LoginDataTypes } from "../../types/types";
import { USER_DATA } from "../../constants";

import styles from "./styles.module.scss";

export const RegistrationForm: FC = () => {
  const { setUserData } = useCommonActions();
  const [showModal, setShowModal] = useState(false);

  const onFinish = (values: LoginDataTypes) => {
    const userData = { email: values.email, password: values.password }
    setUserData(userData);
    localStorage.setItem(USER_DATA, JSON.stringify(userData))
    setShowModal(true)
  };

  return (
    <>
      <Form
        name="registration-form"
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
              autoComplete="off"
              addonBefore={<div>e-mail:</div>}
              size="large"
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: '24px' }}
            name="password"
            help="Пароль не менее 8 символов, с заглавной буквой и цифрой"
            rules={[
              { required: true, message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой' },
              { pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Пароль не менее 8 символов, с заглавной буквой и цифрой" }
            ]}        >
            <Input.Password
              type="password"
              placeholder="Пароль"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirm-password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Подтвердите пароль' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Пароли не совпадают!');
                },
              }),
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Повторите пароль"
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
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
      <SuccessModal open={showModal} setOpen={setShowModal} />
    </>
  )
}
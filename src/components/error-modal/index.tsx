import { FC } from "react";
import { Button, Modal, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { DefaultModalProps } from "../../types/types";

import styles from "./styles.module.scss";

export const ErrorModal: FC<DefaultModalProps> = ({ open, setOpen }) => {
  const handleClick = () => setOpen(false)

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      centered
      className={styles.modal}
      styles={{
        mask: { backgroundColor: "rgba(121, 156, 212, 0.5)", backdropFilter: "blur(4px)" },
      }}
    >
      <Result
        title="Что-то пошло не так"
        subTitle="Неверный логин или пароль. Возможно такой пользователь не зарегистрирован. Попробуйте еще раз"
        icon={<FrownOutlined />}
        extra={
          <Button
            type="primary"
            size="large"
            onClick={handleClick}
            style={{ width: "100%" }}
          >
            Попробовать еще раз
          </Button>
        }
      />
    </Modal>
  )
}
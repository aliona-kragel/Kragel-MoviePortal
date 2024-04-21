import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Result } from "antd";
import { Paths } from "../../constants";
import { SmileOutlined } from "@ant-design/icons";
import { DefaultModalProps } from "../../types/types";

import styles from "./styles.module.scss";

export const SuccessModal: FC<DefaultModalProps> = ({ open, setOpen }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(Paths.AUTH)
    setOpen(false)
  }

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
        title="Регистрация успешна"
        subTitle="Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль."
        icon={<SmileOutlined />}
        extra={[
          <Button
            type="primary"
            size="large"
            onClick={handleClick}
            style={{ width: "100%" }}
          >
            Войти
          </Button>
        ]}
      />
    </Modal>
  )
}
import { FC } from "react";
import { Button } from "antd";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constants";

export const HeaderControls: FC = () => {
  const navigate = useNavigate();

  const onSignInClick = () => navigate(Paths.AUTH);
  const onSignUpClick = () => navigate(Paths.REGISTRATION);

  return (
    <div className={styles.controls}>
      <Button
        type="link"
        size="large"
        onClick={onSignInClick}
      >
        Sign in
      </Button>
      <Button
        type="primary"
        size="large" ghost
        onClick={onSignUpClick}
      >
        Sign up
      </Button>
    </div>
  )
}
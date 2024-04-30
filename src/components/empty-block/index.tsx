import { Empty } from "antd";
import { FC } from "react";
import { EmptyBlockProps } from "../../types/types";

export const EmptyBlock: FC<EmptyBlockProps> = ({ message }) => (

  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={<span style={{ color: "white" }}>{message}</span >}
  >
  </Empty >
)
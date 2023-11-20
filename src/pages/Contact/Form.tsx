import { FC, FormEvent, useState } from "react";
                import { UserData } from "../../common/types/UserData.tsx";
                import { useSpring, animated } from "react-spring";
                                
                type formData = {
                  message: string;
                  subject: string;
                };
                                
                const Form: FC<{
                  userData: UserData;
                }> = ({ userData }) => {
                  const [formData, setFormData] = useState<formData>({
                    subject: "",
                    message: "",
                  });
                                
                  const animationProps = useSpring({
                    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
                    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                  });
                                
                  const handleChange = (event: FormEvent<EventTarget>) => {
                    const { name, value } = event.target as HTMLInputElement;
                    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                  };
                };
                                
                export default Form;
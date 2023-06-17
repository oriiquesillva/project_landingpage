"use client";
import Styles from "./contact.module.scss";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../button/button";
import Input from "../input/input";
import { Loading } from "../loading/loading";
import { SuccessModal } from "../sucess_modal/sucess_modal";
import { FailModal } from "../fail_modal/fail_modal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("O campo nome é obrigatório"),
      email: Yup.string()
        .email("O endereço de email informado não é valido")
        .required("O campo email é obrigatório"),
      telefone: Yup.string()
        .matches(
          "",
          "O telefone informado não é válido, informe um numero válido"
        )
        .required("O campo telefone é obrigatório"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values) => {
    setLoading(true);
    axios
      .post("/api/", {
        message_data: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.telefone} `,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setSucessModal(true)
      })
      .catch(() => {
        setLoading(false);
        setFailModal(true)
      });
  };

  const handleCloseModal = () => {
    setFailModal(false)
    setSucessModal(false)
  }

  return (
    <>
      {sucessModal && <SuccessModal closeModal={handleCloseModal}/>}
      {failModal && <FailModal closeModal={handleCloseModal}/>}
      {loading && <Loading />}
      <div className={Styles.container} id="contact">
        <div className={Styles.text_container}>
          <h1>Não perca tempo e garanta sua vaga</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className={Styles.form_container}>
          <h1>Inscreva-se</h1>
          <form id="formulario" onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              placeholder="Nome completo"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
            />

            <Input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="Digite seu email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
            />

            <Input
              id="telefone"
              name="telefone"
              type="text"
              value={formik.values.telefone}
              placeholder="Celular / Whatsapp"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
            />
            <Button type="submit" title={"Garanta sua vaga"} kind={"full"} />
          </form>
        </div>
      </div>
    </>
  );
}

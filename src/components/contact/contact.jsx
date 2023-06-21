"use client";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import Button from "../button/button";
import { FailModal } from "../fail_modal/fail_modal";
import Input from "../input/input";
import { Loading } from "../loading/loading";
import { SuccessModal } from "../sucess_modal/sucess_modal";
import Styles from "./contact.module.scss";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const router = useRouter();

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
        message_data: `
        Nome: ${values.name}, 
        Email: ${values.email}, 
        Telefone: ${values.telefone} 
        `,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setSucessModal(true);
      })
      .catch(() => {
        setLoading(false);
        setFailModal(true);
      });
  };

  const handleCloseSucessModal = () => {
    setSucessModal(false);
    router.push(
      "https://www.sympla.com.br/evento/a-jornada-do-empreendedor-de-sucesso/2042124"
    );
  };

  const handleCloseFailModal = () => {
    setFailModal(false);
  };


  return (
    <>
      {sucessModal && <SuccessModal closeModal={handleCloseSucessModal} />}
      {failModal && <FailModal closeModal={handleCloseFailModal} />}
      {loading && <Loading />}
      <div className={Styles.container} id="contact">
        <div className={Styles.text_container}>
          <h1>Não perca tempo e garanta sua vaga</h1>
          <p>
            A palestra ocorrerá no dia 13/07 às 19 horas, no edifício CEO
            Salvador Shopping na cidade de Salvador, BA, as vagas são limitadas.
          </p>
          <Link href="https://www.google.com/maps/place/CEO+Salvador+Shopping/@-12.9793474,-38.4520312,17z/data=!3m1!4b1!4m6!3m5!1s0x7161b1ea71bde67:0x36393ee2caf69bb0!8m2!3d-12.9793474!4d-38.4520312!16s%2Fg%2F11b6z13c6h?entry=ttu" target="_blank">
          <Button title={"Ver no mapa"}/>
          </Link>

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

import React, {Component} from 'react';

import AdminLTE, {Box, Button, Col, Content, Row, Sidebar, } from 'adminlte-2-react';
import Income                                                from './Income';
import Users               from './Users';
import WaitingForPayment   from './withdrawal/WaitingForPayment';
import User                from './User';
import Support             from './Support/Support';
import SupportDetail       from './Support/SupportDetail';
import DisputeActive       from './DisputeActive';
import DisputeResolved     from './DisputeResolved';
import ConfirmationPayment from './withdrawal/ConfirmationPayment';
import PaidPayment         from './withdrawal/PaidPayment';
import Canceled            from './withdrawal/Canceled';
import Currencies          from './Settings/Currencies';
import Systems             from './Settings/Systems';
import Faq                 from './Settings/FAQ';
import Documents           from './Settings/Documents';
import Pages               from './Settings/Pages';
import FooterLinks         from './Settings/FooterLinks';

const {Item} = Sidebar;

class AdminLte extends Component {
  render() {
    const sidebar = [
      <Item key="vvod" text="Ввод" to="/income"/>,
      <Item key="v" text={"Вывод"} labels={[
       {small: false, color: '#fff', text: 2, type: 'primary'}
      ]}
            children={[
              <Item key="w1" text="Ожидает подтверждения" to="/withdrawal/confirmation"/>,
              <Item key="w2" text="Ожидает выплату" to="/withdrawal/wait"/>,
              <Item key="w3" text="Выплачены" to="/withdrawal/paid"/>,
              <Item key="w4" text="Отмененные" to="/withdrawal/canceled"/>,
            ]}/>,
      <Item key="w5" text="СДЕЛКИ" to="/w5"/>,
      <Item key="s" text="СПОР" labels={[
        {small: false, color: '#fff', text: 2, type: 'primary'}
      ]}
            children={[
              <Item key="w6" text="Активные" to="/dispute/active"/>,
              <Item key="w7" text="Решенные" to="/dispute/resolved"/>,
            ]}/>,
      <Item key="w8" text="ТРАНЗАКЦИИ" to="/w8"/>,
      <Item key="w9" text="КОД" to="/w9"/>,
      <Item key="users" text="ПОЛЬЗОВАТЕЛИ" to="/users"/>,
      <Item key="w11"
            text="ПОДДЕРЖКА"
            labels={[
              {small: false, color: '#fff', text: 2, type: 'primary'}
            ]}
            to="/support"
      />,
      <Item key="n" text="НАСТРОЙКИ"
            children={[
              <Item key="w12" text="валюты" to="/settings/currencies"/>,
              <Item key="w13" text="системы" to="/settings/systems"/>,
              <Item key="w14" text="faq" to="/settings/faq"/>,
              <Item key="w15" text="документы" to="/settings/docs"/>,
              <Item key="w16" text="страницы" to="/settings/pages"/>,
              <Item key="w17" text="футер ссылки" to="/settings/footer-links"/>,
            ]}/>,
    ];

    return (
      <AdminLTE theme="blue"
                sidebar={sidebar}
                title={['Admin']}
      >
        <Income path="/income"/>
        <Users path="/users"/>
        <User path="/user/:id"/>
        <WaitingForPayment path="/withdrawal/wait"/>
        <ConfirmationPayment path="/withdrawal/confirmation"/>
        <PaidPayment path="/withdrawal/paid"/>
        <Canceled path="/withdrawal/canceled"/>
        <SupportDetail path="/support/:id"/>
        <Support path="/support"/>
        <DisputeActive path="/dispute/active"/>
        <DisputeResolved path="/dispute/resolved"/>
        <Currencies path="/settings/currencies"/>
        <Systems path="/settings/systems"/>
        <Faq path="/settings/faq"/>
        <Documents path="/settings/docs"/>
        <Pages path="/settings/pages"/>
        <FooterLinks path="/settings/footer-links"/>
      </AdminLTE>
    );
  }
}

export default AdminLte;
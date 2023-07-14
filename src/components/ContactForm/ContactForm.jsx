import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContactsList } from 'redux/constacts/selectors';
import { addContact } from 'redux/constacts/operations';
import { Form, Input, Label, Button, AddUserIcon } from './ContactForm.module';
import { Notify } from 'notiflix';

const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} вже є у контактах`);
    }

    if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} вже є у контактах`);
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} успішно додано до контактів`
        );
      })
      .catch(() => {
        Notify.failure('Вибачте, щось не так.');
      });

    onCloseModal();
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Ім'я
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад: Adrian, Jacob Mercer, Prymushko Oleh"
          required
          placeholder="Введіть ім'я ..."
          value={contacts.name}
        />
      </Label>
      <Label>
        Номер
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Номер телефону повинен бути цифровим та може містити пробіли, тире, круглі дужки та починатися з +."
          placeholder="Введіть номер ..."
          value={contacts.number}
        />
      </Label>
      <Button type="submit">
        <AddUserIcon />
        Новий контакт
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
export default ContactForm;

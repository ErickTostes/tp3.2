import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setTimeout(() => {
      alert('Usuário registrado com sucesso');
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="register-container">
      <h1>Registrar-se</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nome</label>
          <input 
            type="text" 
            {...register('name', { required: true })}
          />
          {errors.name && <p>Nome é obrigatório</p>}
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            {...register('email', { 
              required: true, 
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ 
            })}
          />
          {errors.email && <p>Email inválido</p>}
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input 
            type="password" 
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <p>A senha deve ter no mínimo 6 caracteres</p>}
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;

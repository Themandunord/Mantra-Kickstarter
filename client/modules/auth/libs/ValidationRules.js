/**
 * Created by Remy on 29/10/2016.
 */
import React from 'react';
import validator from 'validator';
import {rules} from 'react-validation/lib/build/validation.rc';

Object.assign(rules, {
    required: {
        rule: value => {
            return value.toString().trim();
        },
        hint: () =>  <span className='form-error is-visible'>Ce champ est requis.</span>
    },
    email: {
        rule : value => {
            return validator.isEmail(value);
        },
        hint : value => {
            return <span className='form-error is-visible'>{value} n'est pas une adresse valide.</span>
        }
    },
    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

            if (!isBothUsed || !isBothChanged) {
                return true;
            }

            return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Les mots de passes ne sont pas identiques.</span>

    },
    isName: {
        rule: value => {
            return Boolean(/^[a-zA-ZÀ-ÿ'\s\-]*$/.test(value));
        },
        hint: () => <span className='form-error is-visible'>Les caractères spéciaux sont interdits.</span>

    }
})
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
        hint: value => {
            return <span className='form-error is-visible'>Ce champ est requis</span>
        }
    }
})
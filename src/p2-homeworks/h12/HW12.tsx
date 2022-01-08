import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";

const themes: Array<string> = ['some', 'red', 'dark'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.themes)
    const dispatch = useDispatch()
const onChangeOption = (options:string) => {
  if (options==='some'){
      dispatch(('SOME'))
  }if  (options==='red'){
        dispatch(('RED'))
  }if (options==='dark'){
        dispatch(('DARK'))
    }
}

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

                <div className={s.wrapperHW12}>
                    <SuperSelect
                        options={themes}
                        onChangeOption={onChangeOption}
                    />
                </div>

            </span>
        </div>
    );
}

export default HW12;

import { LangAction, SET_LANGUAGE } from "../../types";


// Setting Lang
export const setLanguage = (lang: string): LangAction =>  {
	localStorage.setItem('language', lang);
	return {
		type: SET_LANGUAGE,
		payload: lang
	}
}

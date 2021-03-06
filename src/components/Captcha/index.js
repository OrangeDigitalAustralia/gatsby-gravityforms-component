import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import Reaptcha from 'reaptcha'

const Captcha = ({
    captchaTheme,
    errors,
    register,
    setValue,
    wrapClassName,
}) => {
    if (!process.env.GATSBY_RECAPTCHA_SITE_KEY) {
        return (
            <div className="gravityform__captcha_notification">
                <p>
                    <strong>
                        To use reCAPTCHA, you need to sign up for an API key
                        pair for your site and use it as a node environment
                        variable named GATSBY_RECAPTCHA_SITE_KEY. The key pair
                        consists of a site key and secret. The site key is used
                        to display the widget on your site. Sign up for an API
                        key pair at 
                        <a
                            target="_blank"
                            title="This link opens a new page"
                            href="http://www.google.com/recaptcha"
                        >
                            http://www.google.com/recaptcha
                        </a>
                    </strong>
                </p>
            </div>
        )
    }

    const captchaRef = useRef(null)
    const [isLoaded, setLoaded] = useState(false)

    const changeCaptchaToken = (token = '') => {
        setValue('g-recaptcha-response', token, true)
    }

    useEffect(() => {
        if (isLoaded && errors && errors.message) {
            captchaRef.current.reset()
        }
    }, [errors, isLoaded])

    return (
        <div className={wrapClassName}>
            <Reaptcha
                onExpire={changeCaptchaToken}
                onLoad={() => setLoaded(true)}
                onVerify={changeCaptchaToken}
                ref={captchaRef}
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                theme={captchaTheme || 'light'}
            />
            <input
                name="g-recaptcha-response"
                ref={register({})}
                type="hidden"
            />
            {errors && (
                <div className="gravityform__error_message">
                    {errors.message}
                </div>
            )}
        </div>
    )
}

Captcha.propTypes = {
    captchaTheme: PropTypes.string,
    errors: PropTypes.object,
    register: PropTypes.func,
    setValue: PropTypes.func,
    wrapClassName: PropTypes.string,
}

export default Captcha

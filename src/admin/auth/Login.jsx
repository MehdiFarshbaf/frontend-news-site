import './auth.css'

const Login = () => {
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="background-overlay"></div>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form className="box">
                                <h1 className="title has-text-centered-desktop mb-5">ورود به پنل مدیریت</h1>
                                <div className="field">
                                    <label className="label">ایمیل</label>
                                    <div className="control">
                                        <input type="email" placeholder="ایمیل شما" className="input"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">گذرواژه</label>
                                    <div className="control">
                                        <input type="password" placeholder="گذرواژه" className="input"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button type="submit" className="button is-success is-fullwidth">ورود</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login
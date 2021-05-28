import React, { useEffect } from "react";
import Loader from "../hoc/Loader";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/square/actions";

const Layout = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getModes());
    }, []);

    const {isFetching, isFetchError, error} = useSelector((state) => state.ui);

    return (
        <>
            <main>
                    <Loader isLoading={isFetching} isError={isFetchError} errorMess={error}>
                        {props.children}
                    </Loader>
            </main>
        </>
    );
};

export default Layout;

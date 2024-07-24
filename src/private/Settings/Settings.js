import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    return (
        <main className='content'>
            <div className='col-12 mb-4'>
                <table className="table align-items-center table-flush table-sm table-hover tableFixHead">
                    <thead className="text-red background-color-red">
                        <tr className="background-color-red">
                        <th className="border-bottom background-color-red col-1" scope="col">CATEGORIA</th>
                            <th className="border-bottom background-color-red col-1" scope="col">CNPJ</th>
                            <th className="border-bottom background-color-red col-2" scope="col">VALOR</th>
                            <th className="border-bottom background-color-red col-2" scope="col">CREATEDAT</th>
                            <th className="border-bottom background-color-red col-2" scope="col">DURATION</th>
                            <th className="border-bottom background-color-red col-2" scope="col">CONTRATANTE</th>
                            <th className="border-bottom background-color-red col-2" scope="col">CONTRATADA</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </main>
    );
}

export default Login;

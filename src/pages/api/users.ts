import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Johnny'},
        {id: 2, name: 'Ferreira'},
        {id: 3, name: 'Silva'}

    ]

    return response.json(users);
}
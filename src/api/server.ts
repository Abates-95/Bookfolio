let token = 'ba56d7313a8bbd7fb5ebc36149e31c7c53ae9500cd438d8b'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://bookcatalogue-yfoo.onrender.com/api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://bookcatalogue-yfoo.onrender.com/api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://bookcatalogue-yfoo.onrender.com/api/books/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }
        
        return await response.json();
    },
    delete: async(id:string) => {
        const response = await fetch(`https://bookcatalogue-yfoo.onrender.com/api/books/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            }
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }
        
        return;
        
    }
}
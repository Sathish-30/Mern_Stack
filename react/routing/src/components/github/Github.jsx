import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();
  return (
    <div className = "text-center m-4 bg-gray-600 text-white p-4 text-3xl">{data.login}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const getGitHubInfo = async() => {
    const response = await  fetch("https://api.github.com/users/sathish-30");
    return response.json();
}
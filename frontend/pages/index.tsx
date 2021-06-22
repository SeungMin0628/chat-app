import React, { useState, useEffect } from 'react'
import { DefaultLayout } from '@/layouts'
import { SamplesApi } from '@/libs/api'

const Index: React.VFC = () => {
  const [sample, setSample] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const pullData = async () => {
    await SamplesApi.show()
      .then(response => {
        const { message } = JSON.parse(response.data)
        setSample(message)
      })
      .catch(_error => {
        setError('Cannot load message from server.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    pullData()
  }, [])

  return (
    <DefaultLayout>
      {!loading && (
        <>
          <p>hello world</p>
          <p>{sample}</p>
        </>
      )}
      {loading && (
        <p>Loading......</p>
      )}
    </DefaultLayout>
  )
}

export default Index

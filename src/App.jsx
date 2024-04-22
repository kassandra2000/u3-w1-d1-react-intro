// import logo from './logo.svg';
import "./App.scss";
import ButtonComponent from "./components/ButtonComponent";
import CardComponent from "./components/CardComponent";
import ColorComponent from "./components/ColorComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <nav>
        <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Shop
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </nav>
      <main>
        <section id="btn-img" className="flex-center flex-column margin-3">
          <ButtonComponent className="button" text="sono un bottone" />
          <ImageComponent
            className="margin-2 img"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFRUYGRgZGBkZGBgaGBgaGBgYGBgcGRgaGBwdIS4lHCMrHxgZJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHBISHjEhISE0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKoBKQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABDEAACAAMFBQQIAggFBQEAAAABAgADEQQSITFBBSJRYXEygZGhBhNCUrHB0fCC4RQVI1NicpLxNKKywtIHM1ST07P/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIDBAX/xAAmEQEBAAIBBAIBBAMAAAAAAAAAAQIRIQMSMUEEUSJxgaHhEyNh/9oADAMBAAIRAxEAPwDzm9BBoih6x6tvdtJWGJgawolsjDQjCiBxCIhwIekRBSGMSUgGEFFRmGEOYGMg9IVIQggIgSwawKwYhhglg4EQUbbhjDQUMIi7n0TmA2dKHFHdD3tf+DiN+hBqPvSOK9D7WA7ymymC8v8AOlagdVJP4I7eS1Rjn8xDGVqWQfpB00buP3rFYVVq9ItVBEIZ89WVvKuh5cj99M+0IDiO+NacRipoQRyx+lPpGValKkdcDx5dYolJnIwMRWJ7swiuDDzFaeRaLc2WGx+xzjMnG6wJ0NedNadRURrbNmnXSWqhqPzzb4wtlvS8h9nHuFS3lSINnOMzjw+vhFqStJ3G8uOA7vhDRVQpRxxut41Eak9TcAHFj33Rn5RXZDfXib/duFh8ItzUqvjX+j8hBaVWzEeqNPePjSnyjCtxvOBxYfEARvSUog6t41MYc0b6k++D3Bq/KK+GsfaSzH9o/f8AP6xRtzFVc8FPwNPhGhY1F9+QJ8q0jL2092U3HdH9RAPkTFbwmFKJJAzJoABmekbf6qH71fFf+UUtk2c9vU1VP9791boPEnVY1P0EcD4RibTzoQqwNYVYwh1hVgKw9YtoVYIQAgwYhBgQiISw5hbNANBGAaKiomMNCaAJjNYqRYIRGpiQQKUYEEsMIKkaMOBBQyisaWzNi2ifiibvvsbqdxPa/CDSNTlvbOhhHcWb0BrT1lpA4rLlk56B2Yf6Yvj0Bs372f4y/wDhDMaz3x5/Z5rI6upoVII4YceUeh7OtauqupwYZcOIPMGo7oqTfQiR7E6YOF4I3HgF4HwhWDYsyzFqTA6HErdKMCMKqKsDhhmMhwpD22LuldHJYOKZH4xEjlc+8RBKbUZHWLolq4qM6ZcYPCRzKHGKU1a1VqEHI8sD8YJiVNNOsBNAP1hKtMQo12o3hVToeVYit9ivqSmnZrn0PX5RZcBgUbuOoOhET2U1JBzyIpga6xM1n7BnVW6c0NKa00+kdDaRQK64EUFeEc/bJJkzUmjBHIV+Tey3fj314x0khbyFaZgnxi2zTzAKoeDL4Fgp8iYsTUNw/ekVpoqpA1UEcjkR4UjQYBlB0ZQR0IrFaNs5Fqh/EfjGK67/AMo31QBT3/fnGOUAmY5UYxbbiGwKT6w6HCvgM4xvSO87IiDedyQNK1Ix5bwPLGOgsEukup1JJ7h9YyrJL9baHmUwQBEGl5hVzyIQgfihvjQtXtnWNRQ+wi0GlVXU82OPUmLP6yHuiIdpzgiXBngTTMnQH71jH/RZ/u/6fpGt64Ued1hVgKwqx59jYwYcGABggYDsdYIGIwYKsaMSqYImIL0GGilMpMYAtCYwBMFFpMYiaDYwBgYtIRMjRBWJUMQlWBEgiJYkUwx0jZ9F9nrOnUZSwUVu6E1AF/8AhGJ50A1j1eyWZQBhpwploAMBHD+gViqrTVIvFytOIUKacu159I76W4yrQjjHowmsWcrysoqgUAHhCJB0+84G+fzgHmcQeuFMusOmdAmkZ0+6U+B84zLS6Vypr3CmHl94xeZ1Ptcs+6lOONIp2mzBh4U4k4Cppnr5QxqRmVCmoyOY4HiOX30lVmU3gTTMdOcQWmzEan6YmuPQecQWa23DccbvPTlGMo1Gw4DrUDepl1zwjKZ7pocItXSu+hww7olcLMF4drUaH84yVFjXHhlEqJWtMx90MV0e6xBxFfDkYns5oa6nziS4ZKT5bS2rQjCuY4Ecww8ob0etJK3X7aEo4/iXCvQ4HviSzTLrBgOo4H7P3SKe0aSZ6TwdybRHPBwDcY+YPIQVi/TYdKNyr8Ys2GplgE4oWQ9Ad3/KVirOm1VWrk1DxzGf3rB2OdR5iGmNHFOW61f8kF8DXAqA3h1p8Ixpg3n5LXzjZdwC3P4RkPiHPvMF+v3zhjUNaGCSbxNAq1bocW8hEWxZBSSpfBmrMfiWc1K+JC9BFfabXykimDvvV9xBfevIhQv44nt05iQi4lj9k8NSYZ5ZqOyymnzbx7KtnpWtfKOh/Z+/5flFKXLCIsqX238s6sfM/wB4k/Up/eP4JHXgbeD1h6wIMIGPItjBggYCsOIltIDD1gAYesTWxVh1MDWHrEZTkwBMItAExC05MCYYmGiZp4kUxHBLEFlYkEQI0TI0MdI7D0D2kEdpLGl/fQ/xgUYd6hf6edI9GQhwNTHidmkTHYLLVmbAgICWGOBwyx1j1PYlqnFFE9LkwbuakPTXdO6TwwxjvhdzQyjXYMtaHuzyHXlEMycRgwx15csPhE6zhgCKRHNlgjWhrywPSN0RTe1I2vPOhx14jTxgBNOSv3HHz/vEVpswPnSngDFF5DjEY60qD3HCBuNF3r2hlqOHGKNpsQbFThy+8Pyio1qdDRgRxByi3KtoOg0x1g21pQs9reSbrAlPMdPp/aNKVNDb8sg8RDTUVxj+cZj2SZLJeU1OWh5ERmhtVSYKYK+Rwz5GKt1kcKcj8opStpS3NH3H091uhjRmT1ZQr56HSvLwjNScEjHMHP60gbZLE2U8hiCWWqHiRiPA0ry6xQeYyHE1GnDxitOtVBgeyaj5g90B7do7Dtlmk0Ym+m43G8Oyx54eIMadi2lvy2JoXAU/jUBf810xxu0ZtyeWGCzKkjDtGt7Dk2OXtU1gZO0TkTjeIz3hQjHOq45V44QTOTiqZY+K9CS3Alhy8MIqWRxicO0z8zTdXzIjn/1ndd64EitOFRiPGELeVlOy4kKoXmzHdFebsvQAnSNbmtnLt1uLMu2Bp82ZoiiUhrhWt6ZT8QQV4DnGpssYGe5GNQo6ff3WOUloFcWdXqFZr78ReNThgTSgrrhHV2CeigO/ZTBF95gcKdCPEcjDhzNuPpto/qVLv/3HGXuLoPh39Ig/TJ3BvE/WILOzO4Zt6Y2IQ5IvFuAEaFyZ+/T+kRsPAAYIRGIIGPLKzKKsPWGrCrCRVh6wFYVYjsd6FegKw1YNrYi0NWGrDVi2NirCBgKw4MG0IGHEDWHEO0mQx03o36P+vo8wkJXdUduZQ0ND7K1wrrQgcRyqmPUPRq00kobpXcTewwAUUAjr05LeWpW7ZLBcQJLRZa6BVA7yTiTzNTEk2xOQd7ziobW7HdvHqa/DCJPUu3aPicPCO1ujMadJ0xN1wHXjeUOP6jvd/jEnrqdlu4lfDDCIzZwM6ecRui8PjB3N6iY20e2B3FfMVhhMlN7V3qK/CKT04eX3WIGYU/vF3LtjSaWp1BHM/IxWawSzUioPKKizKZCJUtBEHdDoa2R1GDhuRz7qw15l7SGnQ/GJ0tQ9qgB5YDKLImAZA/hII/zZd0HA2yLTZpc0aV1H3rGO7zpQoDfSvYYmo6NmPOOmtMmWeytGOOAKnzzEYtvXPE9Dn4iM2KKkrayPu3qH3GwNf4Tr3RVtM+mHdUmgHUnIRQt8kE40AOprhoSadx1inYpc+Y6yVRmLGgVqrhmcTiKA16Yxxzz7Zdq564beyLCk1yZhX1KmgcgEJMe6EQreqCwcEEkAEHGqmNXYmx7DPSaxnGpfBVCApd/ZgkMp7dRhT2lAqaNA23YwSzmQzMr3FqVJ9WxVzdug51ZlJNQBgAoyHNjZQ9W8osxYMW3QQpBS9Qg63ZZIpxxMeH8vkS3DKyfc/wCOOV7bNxu2zZtnExHScxpNlowfsgLRSb12j0wJoeypxNb0aG1PRiUFKyZjVLEm+a0LKwu1AwqhZbxBIFKYne5aakt0W4ho6kXrzhEIUliTS7uhRgoJzwxuxa2ZtgWKcqBC4ZEBObi9RmZQTTfJGFciP5YOr0etjjLhnbZ6+/1WPUxt1ZwzJAeXNKsy3iLzlTUKLzAhjlUAKafxCtDgOj2faTMIIwVaXQchxY/KKVtsItIm2i8UKqxZQVZWdavd3QSMK1yN49nKsGybSpwZgqClGZrqtmTiaVOXjHt+P1u6dt4s8tzjy7GzzGaqy9e25zJ+9Ps2P1W3vt4flGRI9JJCUWUjTWyFBcSuVLxx8FMaP6/t3/gnwnf8Y9m4NvFgYIGIxBAx43LaQQ9YAGHrCZTwoasNEdiMNWGrAkwDYqwqwNYVYhsVYeArD1iOxgw8AIIRGVIgJIGAqQKnIV48o9O2XKUKqoGZEAC0BJI0J65/lHmdlQM6KcmZVOmBIGekerbKnzEQBQGUCmFarTlWO/R9t4tOz2aaR2CBwyPnGjJsLDEjxP39mM+VtZjqR3RZXaBPtR2reslwyKeyDED2Y53F7jj3/ekF+lnQ18oF7W8YWqgmWeYMfVXujD8oqzZTgg+pz0BP0wi1Mtzj+4iBtotqe7vh4OqrurayjSlTryxiJ0ApVCPMeUWztMwl2idcYtRrVU2IIu3Te5g0iGWMaO13ph840/1ipxK49Kwps+W4xQHDgPvWM2Qcs174FFcMOdCD4xm2+0OBvJQ8boYV4kEZcgRG3MMql24R0p8NYx7UUyCkZ5EeeMZq05S3zppBp6th/KVPepb4VjS9CZKl3mMl2aq/s2NbovhxeCsd47rZEYKRrFPaUpcY2fRawh1d57KqOLqIlExo1GvKRQ3S3dmTRhHg+ZZjhd26Y7fzmuWVbJ8ybPLzWoEuoVQAMUINWNaO5CqTiK0GSjJWOVJdnALqGVL113UGu8zLfV2IUqMAScaiuFIrVJb106WjASiRMRt6hQ7wUZlqByKDgxFK4u82+zG0LVJYNCRNdQ11AxKXwyrRVF0UVb90kbsdunMZhO2ajzZ77rsZnuzy5bgoASA4ehcpKuKiMwa5mtRQAVNdKM1UE1izujlQzgM4qMHG7cJ36764AqFzMQ2pZzbqgJdG4C4vKiSwKTCTRLiNSlAavSmgcKRLdL4FwsAoCGgDK6JfD1usWAqK1NMDjG5tktjLLWYiujrgGaq3UV1ACOr3603lxpXeriDSA2lJsrz2KM/bNVbGgIBF0k1FDXtVz1AqY7Japju7osw3jWigBBMoWoysG3cPeBoNaRNPSW1oBlVvEKZgK7oa6MF+fiI4Sf7Zr+nfHnH93T7EnS0G4hHEgXnOmeAoeFQOUbX6Yf3bf1D6RT2e8xQLqCvHCv3jGp6+0+4v9R+kfUnh01HhUFAAw4jwR5xVgqwMKFChVhoQiR4YwoaJFChQoEUPDQ8REIIQIgoSIR3Po1tkOoVmpMXPS+OPM8Y4UGDltQ1BoeIzEbwy7a3jdPX5VoQmjrjx1i0khT2X7mwjz7ZfpOVF2cl8aOAL34hWh6iOs2faZc4fspqt/DXeHVTiI7zKV3xsvitdrJN0FeYofnWKk1Ji5qw50IHmIkEyauBFe/5UMF+s5gzU+J+kN26arMmPM4t5fCKkyc+tehjabbR1UHziu+2Rogr/ACj6xis3f0yvXvlQwg8w+yYvnbR9z/KIH9cH3adQB84Fuq6y5hHY8a/KJZEqa1Cq6mnLxIiQbamtxC88qdPzirP2yn7zuQH5A/GDhm2r0zZ82lXdF6tTyjOtFnlgUebeJ0RT8YrG2O5pLlO5ORYnxoMT4iJzsKcwvT5lwe4mDcwT9S3SHV9RjuYW03krga1yAJq1eg+cSbAaRLnhpxCo6FWDsy7wAK3x2StQRi1N4YCkajbNRF/ZoE4ORVzXhXHHlQRmW3Zu7dpvE1xxbAa8BjHLrdG543Hxv6FmW5l9Ke3VlraHdDfS9QoeyXONBcOAxqDhkcamDCy2DSy5WWUv0qjOXdwBVnpQAdqpWhLVJoa2NiWRQxs8xlpMN9Q3ZDKGxocybtBU+zkYh2hsqZJmzP0dJ028GUPdvEXwb94Ku8SK0OGsebDOYX/Hl5k9uOeFv5RE9o/ZtMLvfQuFqAq7zqyAoFowYKScSMq847fNSW95gXdlBBej1w3XqCLraYAiirhQgxo2DZwtAlCe7In7IsA1KKPWJeUvgCQq4DIY03sNK3bPsdmmSzRXlohvXlV63gAcwQ63jeAxIq1MKUup8jHHLtm7dbWPSys36Z2zLQLPJmNMVCzg1qQzupF5WGBIBvA41xBNBQxiyDOVy2+rMx3qi4wN27mCrEb1eo4GtvacqXaLSzSkKJgqrdArSpJIBoo5fDTqNlWF0AU4jAEGlKZ5HOOvx+l3W5Xct/huy2SfR9m261JmqOKardOPApQDhWh0jW/XUz/xh/7T/wDOL1k2YhXdUyzT2Du96EUp0p3RZ/VL/vl/9Df/AEj36kPD5+EOIYQUeFxIQ8IQ8KKFCh4kaGMFSGgRoaHhRIocQwgxESEFDQ8JNBLAwaxGJFiZTrroeHSIFidBUgDEk0AGJJOAAEbjUalk2/a5dLs56DRzfHD260HSO39HrVbZwvWiWoQrVDduu5JFCVqd2lTWgrhStSYP0O9CLgE60qC+BSWaFU1BbRn8h1y7hrOqDieMdMWpnpyk2xGlWCKM+ySfjGNa3Va0UeBHzjo9pTSxKoKnpl1jLfZh9rHuoPCOmtuky+2A9smeyqjuP1iJmnMRjToo+YjfawCuQiez7OrkMONMK/P7xi7FcnOrs13IvEtjgCScTw+gjfsHoyooz+GZ++le6N6yWNEF40GBqSfvwESSrzkkG6uQbLDlwh7ZGbUVmlIguSkA7qMf5icfHygTZkrjR30GN1cMzxi4uIuSqha0Z+PQ6wE55claKtWJzzNYWYzLbKCYti5GHLu0ii1gCrffNqmp0UYknhhG1YbLevTZoqOfGmFIx/SmcSoljtTMxqssZjlU0XpeHSt01b6cM8iZNnNMS8oIIAGBCXbgU46rgeJLHWLez9rWizTZyLR8ArXyxoJN5QcCK1JpU44iOr2VsncBoKsQMuFPmfKKGz9mB2nTSO3OdVrncVvWPiNDfTvQx5ur8fHPUym9+WJxeHI2eTOYuSXF9wxAqFIa8XpqM0AI0rEts2RMF28SVepoN1Q4pUhVAWtCKYakaR6Eux1uA0ziXaOyfWSBdG92l031qQB1FVrzhnx8IbJpzmw7EHS8w31or8cCLr+Ap48o62y2UCiMQDXA/noYxtlTgjJOUbjYOOIOeHLA5aU1js0sqgBRiD2TpTQA9I742Ys70qiQUAxLaeEH60e9ClTLrFHAr7J94cDzoDjE+77nnDul8zCHEMIcR4XEQhxDQ8KPDwwh4iUKkKFEgmGgzDUgRlEHDAQUJKFChRIoIQMEIiNY9G/6d+j43bTNFTnKU6D94efDgMdRThdi2P105EPZJq38qip8cu+PZbAwUAKMgAAMssAI7dPHfLUnG3QeuVRjEbSXfFiVXh7R6nSAsksDFjVs+QGkTzJ+GH0A6mNr9FWZKRFoAB+cZNpetcac4vWuYFxJGX5nDMjw0x0ipJks+JFBwOdOLaDpHTEye1eRZbxFcjkOP0H3hrceaJdd2pphl5DQD5+B2ieqUCirZD5E+OURrLWWfWTCS5xCmmBjTUMJZIDzSAMwmXl9c4OWHmUrgg01I4cqxBLUziHfsjJeVe0fkOkPb9oBAVXE5YfDpBeDpYtlvVBRPl8oq2CyvMa+53QMa5AcIqbPsjzX3svabQUjYdwbsuXkDrrxJ8cucHlXjiJJzrdJJuy5YLHgaY1r4kxydlDWmcZhHbYBV91PZXuBqeZMWfSm3XyllQ4Ahph81Xv7R7uMafo7Y1BB93HvjPn9mPE200khCopgi1PAXRX5+UZ2xrJdkyVZaH1Su4OavNJdgehen4Y17QlUcH2xcrwDkKT3Xqwpa1LPTtHLOgocvAwW8s+xeqBQYZU8cICzSaq65XWNOmeUXF7GIw4RBZnpNYaEAjwGXfFs+nMzbOqTmTJJg9YnAE9odzV7mEbGwLRUGQ53kxQ/wg4jnQkdxA0iDb9l/Z3x2pLFvwHB/wDax5LGa047s1DvAgjr+dSDyJi13TQrqrRIDggj616/OKf6I/2w+kWbHbFnIHXUYqcwRmD0NYmvDgPOKbHL5dEEIEQQjyMHEOIaHhRxDwoURPCpChREoUKHAiRwIUPSEYSGFDwjEih4aHgDd9EGAtGPuNTxX5Vj0myT6eX5R4/ZrQyMHXMVp3ihHgY9N2dtEOiMqihUY8xz5Zd0ejpZcadseZp2EqYSMcO+GtFtVRQeWeeXwxy+eLJZnzYAeHnrGlZpEsUCirHCtAMdSSM6AExuw9sgrLZ2mMXbsg4VrvNx6Dnrwi3aZlwUXOuHURYY3FoMgPv71rFOc4TfbF2rdHDAn5HwMMZ3uqzsJQvvi5yGq1+dPCK8uSztefTTOnAcz94aEsu8xdzU8cwDmQvljyjP2ntS6LieR11x+Jje9NSLW0NqBFuJrw+R+cZ9gsrzmrjjmcgBEWz7C85qk4anQDgOUa9otSotyXgMmYa/f3ljnybdcRZnT1RfVy8vaI1p8orW+3rZZTOwq7CiL/ERgo1wzJ6wCTJcpDNdqYVFcgOJ4n7Eci9re2Tg5qFBoinRScSeZoK9AMaQW64jOmhsOzMxMxySxJLHiTHc2JLqDCl7HujDsNmulUHKvyEdCuLXRktB4mn5w61GcqGe5FBwrh5H/X5RLLqE545ceXjFW1uL9OAAGPG9eHgEPfE+mOt4juurXzjOvY0sIxoQeB591R94xnNOpMQ0zwOPCv5eEWZb9rP7zjItb7yE6NTxOHzhmLcjftareuMKqy0YaGuBHhSOHsRKF5LGpViteN0kBu8Yx2Ntm7iuOR+/vhHGekIuWkOMnVWJ/iG6R4Kp74JxqsaTbN2gbPMN47jmjfwmlA/lQ9Bwjq/0+Xy8o4y2rfWo74xfUch998aPDzcQ4hhDiPC4nhxDQ4hQhChhDxE4h4aHERKCAhhDiEnhqQ8KImhEQ8NEKUIQoUAOI0NmbWmSDuGqnNDip+h5jzjOhQy6Mrt7J6Xy/bR1PKjCviD5R2/olbJc9GnLeIqUF6ooRQtgcNVxjxWPWv8Ap7/gF6zP9bR3wytb7r4dROtCglziBQKPeb55n7EVghNXc464kADVR8Cf7Qy5p0b4RFtjsd4+EdYYyNrbTPYTpypwpw+MQ7M2WX33wTUnM0+H3nFCx4zFrjVhXnjHS7WO4P5YG7wrWm20FyWKLWnM8B+UDLVZaGZN0yFaCtMSegrFfZ+fc3+mKXpicUGlRhpkI14lE8sXbm1XtMwItbgNaZXiMiRpyGnw6HYOz7iBiOnyMcrsX/uHqI75uwvRYx0+eaq0Nm03n604YYfGLtiagvascO4xUlf9n8XyEW7Hkv8AII3fDnVeY9ZnUsfAKlPFTGheFO4/H+0Ytj7Q6v8A/o8bL5fgb4weoUSOKtyw/OMS2scSD7Z8ia/KNh/a+9TGPa8m6v8AONR0xbLPWSK6KK90cj6US9yW49klO4iv+wR1Y/w4/kPzjmNv/wCHX+Yf6WjF8VmeFTZk68l06xL+g/eEZuyMx1+cbd88TDjeA//Z"
          />
        </section>
        <hr className="mb-5 line" />
        <section id="section-card " className="flex-around mb-5">
          <CardComponent
            classNameDiv="card card-container"
            className="imgStyle card-img-top"
            textBtn="sono un bottone"
            title="titolo di una card"
            text="Un immagine sulle tonalità del viola"
            src="data:image/jpeg;base64,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"
          />
          <CardComponent
            classNameDiv="card card-container"
            className="imgStyle card-img-top"
            textBtn="bottone secondario"
            title=" card secondaria"
            text="img generata tramite react"
            src="data:image/jpeg;base64,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"
          />
          <CardComponent
            classNameDiv="card card-container"
            className="imgStyle card-img-top"
            textBtn="sono il terzo bottone"
            title="terzo titolo "
            text="altra img generata tramite react"
            src="https://dalmiocuore.it/image/uploads/grazie_1.jpg"
          />
        </section>
        <section id="section-card2 " className="flex-around mb-5">
          <CardComponent
            classNameDiv="card card-container"
            className="imgStyle card-img-top"
            textBtn="sono un bottone"
            title="titolo di una card"
            text="Un immagine sulle tonalità del viola"
            src="https://www.raicultura.it/cropgd/900x520/dl/img/2020/04/08/1586351246504_abstract-2468874_1920.jpg"
          />
          <CardComponent
            classNameDiv="card card-container"
            className="imgStyle card-img-top"
            textBtn="bottone secondario"
            title=" card secondaria"
            text="img generata tramite react"
            src="https://img-16.ccm2.net/lbJgPlFe-hn89t0gME15b5ipxJ0=/850x/8fddb577bb794284aee05b9068cbdb12/ccm-faq/simon-matzinger-twukN12EN7c-unsplash.jpg"
          />
          <CardComponent
            classNameDiv="card card-container"
            className="imgStyle card-img-top"
            textBtn="sono il terzo bottone"
            title="terzo titolo "
            text="altra img generata tramite react"
            src="https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600"
          />
        </section>
        <hr className="mb-5 line" />
        <section id="sect3 " className="flex-around mb-5">
          <ColorComponent className="list-group w-25 d-inline-block" />
          <ColorComponent className="list-group w-25 d-inline-block" />
          <ColorComponent className="list-group w-25 d-inline-block" />
        </section>
      </main>
      <footer className="container-fluid bg-dark p-4">
        <div className="row">
          <div className=" mt-4 col-12 col-md-4">
            <form className="form-group">
              <label className="label" htmlFor="exampleInputEmail1">
                Email
              </label>
              <input
                type="email"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Inserisci email"
              />
              <div className="form-group">
                <label className="label" htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input mt-3"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label mt-1"
                  htmlFor="exampleCheck1"
                >
                  Approva
                </label>
              </div>
              <button type="submit" className="btn button ">
                Submit
              </button>
            </form>
          </div>
          <div className="col-12 mt-5 mt-md-0 col-md-8">
            <h2 className="text-center">Informazioni</h2>
            <div className="row ms-3">
              <div className="col-12 col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus iste sunt animi modi voluptas ea voluptates natus rem!
                Quae quasi cum quos nostrum et facere atque labore architecto
                ullam! Sequi.
              </div>
              <div className="col-12 col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus iste sunt animi modi voluptas ea voluptates natus rem!
                Quae quasi cum quos nostrum et facere atque labore architecto
                ullam! Sequi.
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-center text-md-start  fs-5">
          {" "}
          ©Copyright 2024 HTML.React
        </p>
      </footer>
    </div>
  );
}

export default App;

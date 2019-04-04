export function handleChange ( event ) {
    const { target } = event;

    const { value } = target;

    const { name } = target;

    this.setState({
      [name]: value
    });
  };
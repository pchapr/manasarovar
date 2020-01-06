package learning.rest.springboot.springbootrestapi.dao;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data
public class CloseProcess {

    @Id
    private ObjectId _id;
    private String processName;
    private long startTime;
    private long endTime;
    private Status processStatus;
    private OperationState operationState;

    public String get_id() {
        return _id.toHexString();
    }

    public void set_id(ObjectId id) {
        this._id = id;
    }

    public enum Status {
        INPROGRESS, SUCCESS, FAILURE
    }

    public enum OperationState {
        START, END
    }
}
